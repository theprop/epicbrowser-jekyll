function FindProxyForURL(url, host) {
if (shExpMatch(host, "(*.search.yahoo.com|search.yahoo.com|update.epicbrowser.com|searchyahoo.epicbrowser.com)"))
       return "DIRECT";
return "HTTPS de2.theepicbrowser.com:8888";
}
