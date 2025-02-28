function FindProxyForURL(url, host) {
if (shExpMatch(host, "(*.search.yahoo.com|search.yahoo.com|update.epicbrowser.com|searchyahoo.epicbrowser.com)"))
       return "DIRECT";
return "HTTPS uk.epicbrowser.net:8888";
}
