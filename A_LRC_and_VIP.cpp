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
    int t;cin>>t;
    while(t--){
    int n;cin >> n;
    vector<int> arr(n);
    for (int i = 0;i<n; i++) cin >> arr[i];
    int m = 0;
    for (int i = 1;i<n; i++) {
        if (arr[i]>arr[m]) m = i;
    }
    bool flg = true;
    for (int i = 1; i < n; i++) {
        if (arr[i] != arr[0]) {
            flg = false;
            break;
        }
    }int er=0;
    if (flg) { cout << "No" << endl;
    }else
    {cout << "Yes" << endl;
    for (int i = 0; i<n; i++) {
        if (i == m) cout << 1 << " ";
        else cout << 2 << " ";
    }
    cout << endl;}
    }return 0;
}