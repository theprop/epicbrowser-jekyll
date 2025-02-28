<?php
?>
<html>
 <head>
  <title>Epic extensions store</title>

<script type="text/javascript">
function findElement(arr, propName, propValue) {
        for (var i=0; i < arr.length; i++)
            if (arr[i][propName] == propValue)
               return arr[i].id;
            // will return undefined if not found; you could return a default instead
}
function addEventListenerByClass(classname, event, fn){
        var cname = document.getElementsByClassName(classname);
         for (var i = 0, len = cname.length; i < len; i++) {
                   cname[i].addEventListener(event, fn, false);
         }
}

addEventListenerByClass('instcls', 'click', function(){
console.log(this);
});

chrome.management.getAll(
        function(all_extensions){
                var store_ids = []
                store_ids = ['ojiiaeeihchgdagidpibppfofojfgkhh', 'bklannlklilplfbikfggpglodhfbpock', 'omooofpijhlffbgjpggeemieoifbpibj', 'kddoleaebognncgajbecobgjaebngbmk', 'cdhjjbofokjbggkdnenffnjooclanjcf', 'nhcofdeldjnlacjjolfdfegekplkacol', 'aihfcckighmjnhpkfilmfdodackcjfcf', 'kodilgmecbklipmjoheebdakiiadfgpd','hehijbfgiekmjfkfjpbkbammjbdenadd'];
                for(i=0; i<store_ids.length; i++){
                                        idname=store_ids[i]+"_installed"
                                        idname2=store_ids[i]+"_install"
                                        var k = document.getElementById(idname2); if(k) k.style.display ="inline";
                                        if(findElement(all_extensions, 'id', store_ids[i])!=undefined){
                                                  document.getElementById(idname2).style.display="none";
                                                  document.getElementById(idname).style.display="inline";
                                        }
                }
        });

chrome.management.onInstalled.addListener(function(info) {

document.getElementById(info.id+'_install').style.display="none";
        document.getElementById(info.id+'_installed').style.display="inline";
});

</script>
 </head>
<body>
    <img border="0" src="images/logo.png" alt="Pulpit rock" width="400" height="50">


<div id="row_1" >
<div id="ojiiaeeihchgdagidpibppfofojfgkhh" style="float: left;" >
                        <span id="ojiiaeeihchgdagidpibppfofojfgkhh_install" class="instcls" style="display:none;"> <a href="crx_files/adblockt.crx">
                        <img src="images/adb_install.png" alt="AdBlock" width="444" length="132" ></a>
                </span>
                <span id="ojiiaeeihchgdagidpibppfofojfgkhh_installed" style="display:none;">
                        <img src="images/adb_installed.png" alt="AdBlock" width="444" length="132">
                </span>
</div>

<div id="bklannlklilplfbikfggpglodhfbpock" >
                        <span id="bklannlklilplfbikfggpglodhfbpock_install" class="instcls" style="display:none;"> <a href="crx_files/proxyt.crx">
                        <img src="images/EpicProxy_install.png" alt="Proxy" width="444" length="132" ></a>
                </span>
                <span id="bklannlklilplfbikfggpglodhfbpock_installed" style="display:none;">
                        <img src="images/EpicProxy_installed.png" alt="Proxy" width="444" length="132">
                </span>


</div>
</div>

<div id="row_2" >

    <div id="kddoleaebognncgajbecobgjaebngbmk" style="float: left;">
        <span id="kddoleaebognncgajbecobgjaebngbmk_install" class="instcls" style="display:none;"> <a href="crx_files/evernote_web_clipper.crx">
<img src="images/evernote.png" alt="Evernote Web Clipper"></a>
</span>
        <span id="kddoleaebognncgajbecobgjaebngbmk_installed" style="display:none;"><img src="images/evernote_installed.png" alt="Evernote Web Clipper"></span>
    </div>


        <div id="kodilgmecbklipmjoheebdakiiadfgpd">
        <span id="kodilgmecbklipmjoheebdakiiadfgpd_install" class="instcls" style="display:none;"> <a href="crx_files/Xmark.crx">
<img src="images/xmarks.png" alt="Xbookmarks for Epicbrowser"></a>
</span>
        <span id="kodilgmecbklipmjoheebdakiiadfgpd_installed" style="display:none;"><img src="images/xmarks_installed.png" alt="Xbookmarks for Epicbrowser"></span>
    </div>


</div>


<div id="row_3" >
    <div id="omooofpijhlffbgjpggeemieoifbpibj" style="float: left;">
        <span id="omooofpijhlffbgjpggeemieoifbpibj_install" class="instcls" style="display:none;"> <a href="crx_files/clearly.crx">
<img src="images/clearly.png" alt="Clearly from Evernote for Epicbrowser"></a>
</span>
        <span id="omooofpijhlffbgjpggeemieoifbpibj_installed" style="display:none;"><img src="images/clearly_installed.png" alt="Clearly from Evernote for Epicbrowser"></span>
    </div>


    <div id="cdhjjbofokjbggkdnenffnjooclanjcf">
        <span id="cdhjjbofokjbggkdnenffnjooclanjcf_install" class="instcls" style="display:none;"> <a href="crx_files/last_pass_10_27_2014.crx">
<img src="images/lastpass.png" alt="Last Pass for Epicbrowser"></a>
</span>
        <span id="cdhjjbofokjbggkdnenffnjooclanjcf_installed" style="display:none;"><img src="images/lastpass_installed.png" alt="Last Pass for Epicbrowser"></span>
    </div>
</div>
<div id="row_4" >
    <div id="nhcofdeldjnlacjjolfdfegekplkacol" style="float: left;">
        <span id="nhcofdeldjnlacjjolfdfegekplkacol_install" class="instcls" style="display:none;"> <a href="crx_files/pocket.crx">
<img src="images/pocket.png" alt="Pocket for Epicbrowser"></a>
</span>
        <span id="nhcofdeldjnlacjjolfdfegekplkacol_installed" style="display:none;"><img src="images/pocket_installed.png" alt="Pocket for Epicbrowser"></span>
    </div>



    <div id="aihfcckighmjnhpkfilmfdodackcjfcf">
        <span id="aihfcckighmjnhpkfilmfdodackcjfcf_install" class="instcls" style="display:none;"> <a href="crx_files/roboform.crx">
<img src="images/roboform.png" alt="Roboform for Epicbrowser"></a>
</span>
        <span id="aihfcckighmjnhpkfilmfdodackcjfcf_installed" style="display:none;"><img src="images/roboform_installed.png" alt="Roboform for Epicbrowser"></span>
    </div>
</div>
<div id="row_0" >

    <div id="hehijbfgiekmjfkfjpbkbammjbdenadd" style="float: left;">
        <span id="hehijbfgiekmjfkfjpbkbammjbdenadd_install" class="instcls" style="display:none;"> <a href="crx_files/ie-tab.crx">
<img src="images/IEtab-install.png" alt="Evernote Web Clipper"></a>
</span>
        <span id="hehijbfgiekmjfkfjpbkbammjbdenadd_installed" style="display:none;"><img src="images/IEtab-installed.png" alt="Evernote Web Clipper"></span>
    </div>

<!--  <div id="kodilgmecbklipmjoheebdakiiadfgpe" >
        <span id="kodilgmecbklipmjoheebdakiiadfgpe_install" class="instcls" style="display:none;"> <a href="crx_files/Xmark.crx">
<img src="images/xmarks.png" alt="Xbookmarks for Epicbrowser"></a>
</span>
        <span id="kodilgmecbklipmjoheebdakiiadfgpe_installed" style="display:none;"><img src="images/xmarks_installed.png" alt="Xbookmarks for Epicbrowser"></span>
    </div>
 -->


</div>

</body> </html>

