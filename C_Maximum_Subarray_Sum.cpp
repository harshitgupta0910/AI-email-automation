#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    const ll NEG_INF = -1000000000000000000LL;

    int t;
    cin >> t;
    while(t--){
        int n;
        ll k;
        cin >> n >> k;
        string s;
        cin >> s;
        vector<ll> a(n);
        for(int i = 0; i < n; i++){
            cin >> a[i];
        }

        ll curr = 0, M_known = LLONG_MIN;
        for(int i = 0; i < n; i++){
            if(s[i] == '1'){
                curr = max(curr + a[i], a[i]);
                M_known = max(M_known, curr);
                if(curr < 0) curr = 0;
            } else {
                curr = 0;
            }
        }

        if(M_known > k){
            cout << "No\n";
            continue;
        }
        int zero_pos = -1;
        for(int i = 0; i < n; i++){
            if(s[i] == '0'){
                zero_pos = i;
                break;
            }
        }
        if(zero_pos == -1){
            if(M_known == k){
                cout << "Yes\n";
                for(ll v : a) cout << v << ' ';
                cout << "\n";
            } else {
                cout << "No\n";
            }
            continue;
        }
        int j = zero_pos;
        ll suffix_sum = 0, Lmax = LLONG_MIN;
        bool foundL = false;
        for(int i = j - 1; i >= 0 && s[i] == '1'; i--){
            suffix_sum += a[i];
            Lmax = max(Lmax, suffix_sum);
            foundL = true;
        }
        ll L = foundL ? Lmax : 0;
        ll prefix_sum = 0, Rmax = LLONG_MIN;
        bool foundR = false;
        for(int i = j + 1; i < n && s[i] == '1'; i++){
            prefix_sum += a[i];
            Rmax = max(Rmax, prefix_sum);
            foundR = true;
        }
        ll R = foundR ? Rmax : 0;
        ll x;
        if(L >= 0 && R >= 0){
            x = k - L - R;
        } else if(L >= 0 && R <= 0){
            x = k - L;
        } else if(L <= 0 && R >= 0){
            x = k - R;
        } else {
            x = k;
        }
        cout << "Yes\n";
        for(int i = 0; i < n; i++){
            if(s[i] == '0'){
                if(i == j) cout << x;
                else        cout << NEG_INF;
            } else {
                cout << a[i];
            }
            cout << (i+1<n ? ' ' : '\n');
        }
    }
    return 0;
}
