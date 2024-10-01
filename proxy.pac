function FindProxyForURL(url, host) {
    // Advertisement Sites & Networks
    if (shExpMatch(host, "3lift.com")
        || shExpMatch(host, "a-mo.net")
        || shExpMatch(host, "ad-stir.com")
        || shExpMatch(host, "adingo.jp")
        || shExpMatch(host, "adnxs.com")
        || shExpMatch(host, "adtdp.com")
        || shExpMatch(host, "adroll.com")
        || shExpMatch(host, "casalemedia.com")
        || shExpMatch(host, "criteo.com")
        || shExpMatch(host, "doubleclick.net")
        || shExpMatch(host, "*.doubleclick.net")
        || shExpMatch(host, "fout.jp")
        || shExpMatch(host, "im-apps.net")
        || shExpMatch(host, "kargo.com")
        || shExpMatch(host, "ladsp.com")
        || shExpMatch(host, "media.net")
        || shExpMatch(host, "openx.net")
        || shExpMatch(host, "pubmatic.com")
        || shExpMatch(host, "rubiconproject.com")
        || shExpMatch(host, "scorecardresearch.com")
        || shExpMatch(host, "taboola.com")
        || shExpMatch(host, "teads.tv")
        || shExpMatch(host, "value-press.com")
        || shExpMatch(host, "yads.yjtag.yahoo.co.jp")
        || shExpMatch(host, "*.yads.yjtag.yahoo.co.jp"))
    {
        return "PROXY 127.0.0.1:18080";
    }
 
    // Others
    return "DIRECT";
}
