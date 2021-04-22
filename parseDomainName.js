/*

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

function domainName(url){
 
    const domainUrl = url.split(".");

    if (domainUrl[0].includes("www")) {
        return domainUrl[1]
    } else if (domainUrl[0].includes("//")) {
        return domainUrl[0].split("/")[2]
    } else {
        return domainUrl[0]
    }
  
  }

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://youtube.com"))
console.log(domainName("vzjbkft.info/users"))