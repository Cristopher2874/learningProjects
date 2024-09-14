#include<bits/stdc++.h>
#define ll long long
using namespace std;

int n, m, dist[2005][2005], may, cordx, cordy;
char mapa[2005][2005];
queue<pair<int, int>> cola;


int main(){
    cin>>n>>m;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin>>mapa[i][j];
            if(mapa[i][j]=='G'){
                cola.push({i, j});
                //cout<<i<<" "<<j<<"\n";
                dist[i][j]=1;
            }
            if(mapa[i][j]=='#'){
                dist[i][j]=-1;
            }
        }
    }
    
    while(!cola.empty()){
        cordx=cola.front().first;
        cordy=cola.front().second;
        //cout<<cordx<<" "<<cordy<<"\n";
        cola.pop();
        if(cordx+1<n && dist[cordx+1][cordy]==0){
            cola.push({cordx+1,cordy});
            dist[cordx+1][cordy]=dist[cordx][cordy]+1;
        }
        if(cordx-1 >=0 && dist[cordx-1][cordy]==0){
            cola.push({cordx-1,cordy});
            dist[cordx-1][cordy]=dist[cordx][cordy]+1;
        }
        if(cordy+1<m && dist[cordx][cordy+1]==0){
            cola.push({cordx,cordy+1});
            dist[cordx][cordy+1]=dist[cordx][cordy]+1;
        }
        if(cordy-1>=0 && dist[cordx][cordy-1]==0){
            cola.push({cordx,cordy-1});
            dist[cordx][cordy-1]=dist[cordx][cordy]+1;
        }
        may=dist[cordx][cordy]-1;
    }
    
  /*for(ll i=0; i<n; i++){
        for(ll j=0; j<m; j++){
            cout<<dist[i][j]<<" ";
        }
        cout<<"\n";
    }*/
    
    cout<<may;

}