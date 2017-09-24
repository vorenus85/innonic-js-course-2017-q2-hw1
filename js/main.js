/* constructor function */

function Pager(){
    var page = 0;
    var myJsonObj = getJson('./source/data.json');
    var itemPerPage = 10;
    // Public methods
    function getJson(url) {
        return JSON.parse($.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            global: false,
            async:false,
            success: function(data) {
                return data;
            }
        }).responseText);
    };
    this.next = function(){
        var self = this;
        function incPage(){
            return page++;
        }
        incPage();
        self.iteratePage();
    };
    this.prev = function(){
        var self = this;
        function decPage(){
            return page--;
        }
        decPage();
        self.iteratePage();
    };
    this.current = function(){
        var self = this;
        self.iteratePage();
    };
    this.getPage = function(pageNumber){
        var self = this;
        page = pageNumber
        self.iteratePage();
    };
    this.iteratePage = function(){
        console.log('page: '+page);
        for( var i = page * itemPerPage; i <= ( page * itemPerPage) + (itemPerPage - 1); i++){
            console.log(myJsonObj[i]);
        }
        console.log('\n');
    }
}