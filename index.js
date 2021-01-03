  //update Array object to accept insert item to any index
 [].__proto__.pushAt = function (item, index){
     this.push(this[this.length - 1])
     for(let i=this.length - 1; i>index; i--){
         this[i] = this[i - 1]
     }
     this[index] = item
}

function possibols(n){
     if (!n) return null
     if(n == 1) return [[0]]
     let p = possibols(n-1), r =[]
     for(let i = 0; i < p.length; i++){
         r.push([...p[i], n - 1])
         for(let j=1; j < p[i].length; j++){
             let t = [...p[i]]
             t.pushAt(n-1, j)
             r.push(t)
         }
         r.push([n - 1, ...p[i]])
     }
     return r
    
}

//Usage of function
let ps = possibols(5);

//find number of possiblse that function should return
//calculate N! to get number of possibales arrangement
let fact = 1, nf = 5

while(nf > 1)   fact *= nf--
console.log('Function shoud return ' + fact + ' deffrent possibles');

//see the result in console of browser
console.log(ps);

 //check if any possible rpeated
 function isSame(a, b){
     for(let i=0; i<a.length; i++)
         if(a[i] != b[i]) return false
     return true
 }
 function checkRepeated(p){
     let f = false;
     for(let i=0; i<p.length - 1; i++){
         for(let j=i+1; j<p.length; j++){
             if(isSame(p[i], p[j])){
                 f=true
                 console.error(p[i], ' Are repeated at:', i, j);
             }
         }   
     }
     if(!f) console.log('Their is no repeates');
 
 }
 
 checkRepeated(ps)
 
 
