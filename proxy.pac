function FindProxyForURL(url, host) {
    // Advertisement Sites & Networks
    if (shExpMatch(host, "*.adnxs.com")
        || shExpMatch(host, "*.adtdp.com")
        || shExpMatch(host, "*.adroll.com")
        || shExpMatch(host, "*.criteo.com")
        || shExpMatch(host, "*.doubleclick.net")
        || shExpMatch(host, "*.im-apps.net")
        || shExpMatch(host, "*.ladsp.com")
        || shExpMatch(host, "*.openx.net")
        || shExpMatch(host, "*.media.net")
        || shExpMatch(host, "*.scorecardresearch.com")
        || shExpMatch(host, "*.rubiconproject.com")
        || shExpMatch(host, "*.taboola.com")
        || shExpMatch(host, "*.teads.tv")
        || shExpMatch(host, "*.value-press.com"))
    {
        return "PROXY 127.0.0.1:18080";
    }
 
    // Others
    return "DIRECT";
}
