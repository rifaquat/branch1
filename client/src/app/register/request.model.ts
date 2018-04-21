export class RequestData{
    pageNumber : number;
    size : number;
    search : string;
    constructor(            
        $pageNumber : number,
            $size : number,
            $search : string
        ){
          this.size = $size;  
          this.pageNumber = $pageNumber;  
          this.search = $search;  
    }
    
    getPageNumber() : number {
        return this.pageNumber;
    }

    getSize() : number {
        return this.size;
    }

    getSearch() : string {
        return this.search;
    }
   

}
