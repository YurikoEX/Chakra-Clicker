/**
 * Created by jtl2 on 10/6/13.
 */
var clicks = {
    total : 0,
    add : function(num){
        this.total+=num;
        this.update();
    },
    update : function(){
        $('#clickCountDisplay').text(this.total + ' chi');
    },
    init : function(){
        this.update();
    }

};
clicks.init();

$(document).ready(function(){
    $('#root').click(function(){
        clicks.add(1);
        animate();
    });
});


var ct;
function animate(){
    clearInterval(ct);
    $('#root').removeClass().addClass('pulse animated');
    ct = setTimeout(function(){
        $('#root').removeClass();
    },1000);
}