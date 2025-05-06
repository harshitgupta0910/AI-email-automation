//Author :D HARSHIT 
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> pi;
typedef set<int> sti;
typedef set<long> stl;
typedef set<char> stc;
typedef set<string> str;
typedef map<int, int> mpii;
typedef map<int, char> mpic;
typedef map<char, int> mpci;
typedef map<int, string> mpis;
typedef map<string, int> mpsi;
typedef map<string, string> mpss;
#define F first
#define S second
#define PB push_back
#define MP make_pair
#define len(s) (int)s.size()
#define print(x) cout << x << '\n'
#define ull unsigned long long
#define ll long long
#define int ll
using pii = pair<int, int>;
int32_t main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    int t;cin >> t; 
    while (t--) {
        long long n,k;cin >>n>>k;
        vector<long long>a(n);
        for (int i = 0; i<n;i++)cin >> a[i];
        long long mii = *min_element(a.begin(), a.end());
        long long mxx = *max_element(a.begin(), a.end());
        long long sm = accumulate(a.begin(), a.end(),0);
        long long er = 0;
        long long cnt = 0;
        for(int i= 0;i<n;i++){
            if(a[i] == mxx) cnt++;
        }
        if(mxx-mii-1>k||mxx-mii-1==k&&cnt>1) {cout<<"Jerry"<<endl;continue;}
        // else cout<<"Tom"<<endl;
        int qw=0;
        // for (int i=0;i<n;i++) er+=a[i]-mii;
        if(sm%2== 0) cout<< "Jerry"<<endl;
        else cout<< "Tom"<<endl;
    }
return 0;
}