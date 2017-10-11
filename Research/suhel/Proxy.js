'use strict';

class SubjectProxy {
    constructor() {}

    ReadData (authToken) {}
    WriteData (authToken,data) {}
}

class RealSubject  {
    constructor() {
        this.data = "HelloWorld"

    }   
    ReadData(){
        return this.data
    }
    WriteData(datum){
        this.data=datum
   }
        
}


class AccessProxy extends SubjectProxy {
    //var subject =  new RealSubject()
    constructor() {
        super()
        this.subject = new RealSubject()
        //facade.log('Proxy created')
    }

    ReadData(authToken) {
        if(authToken === '1234567890'){
            return this.subject.ReadData()
        }
        else{
            return "Unauthorized Access"
        }
    }

    WriteData( authToken , datum){
        if(authToken === '1234567890'){
            return this.subject.WriteData(datum)
        }
        else{
            return "Unauthorized Access"
        }
    }
   
}


class CacheProxy extends SubjectProxy {
    //var subject =  new RealSubject()
    
    constructor() {
        super()
        this.subject= new RealSubject()
        this.dataCache=null
        this.cacheExpired=false
        //facade.log('Proxy created')
    }

    ReadData(authToken) {
        if (this.dataCache != null && !this.cacheExpired) {
            console.log("Cache hit! Returning cached data.");
            return this.dataCache;
        }
        else {
            this.dataCache = this.subject.ReadData();
            this.cacheExpired = false;
            return this.dataCache;
        }
    }
    WriteData(authToken,datum){
       this.subject.WriteData(datum)
       this.dataCache=datum
       this.cacheExpired=false
   }
}

class HttpClient {
        constructor(){}
        Get( url ) { return "The Remote Data!"  }
        Put( url, data ) { console.log( "Remote Host Update Processed!")}
    }
class RemotingProxy extends SubjectProxy {
    // subject is remote!  access will be via HTTP PUT/GET
     constructor() {
        super()
        this.httpClient = new HttpClient() ;  
    }
 
    /**
     * @see proxy.SubjectProxy#readData(java.lang.String)
     */
    ReadData(authToken) {
        return this.httpClient.Get( "http://remoteserver/data/id/12345" ) ;
    }
     
    /**
     * @see proxy.SubjectProxy#writeData(java.lang.String, java.lang.String)
     */
    WriteData(authToken, data) {
        this.httpClient.Put( "http://remoteserver/data/id/12345", data);
    }
}


function init_Proxy() {
    var proxy1 = new AccessProxy()
    var proxy2 = new CacheProxy()
    var proxy3 = new RemotingProxy()  
    
            // read
    console.log( proxy1.ReadData("1234567890") )
    console.log( proxy2.ReadData("1234567890") )
    console.log( proxy3.ReadData("1234567890") )
            // cache hit
    console.log( proxy2.ReadData("1234567890") )
            // write
    proxy1.WriteData("1234567890", "New Data")
    proxy2.WriteData("1234567890", "New Data")
    proxy3.WriteData("1234567890", "New Data")
            // access violation
    console.log(proxy1.ReadData("000000000"))

}

init_Proxy()