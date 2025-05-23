function FindProxyForURL(url, host) {
    var adHosts = [
        "3lift.com",
        "a-mo.net",
        "ad-stir.com",
        "adingo.jp",
        "adnxs.com",
        "adtdp.com",
        "adroll.com",
        "casalemedia.com",
        "criteo.com",
        "doubleclick.net",
        "fout.jp",
        "im-apps.net",
        "kargo.com",
        "ladsp.com",
        "media.net",
        "openx.net",
        "pubmatic.com",
        "rubiconproject.com",
        "scorecardresearch.com",
        "taboola.com",
        "teads.tv",
        "value-press.com",
        "yads.yjtag.yahoo.co.jp"
    ];

    for (var i = 0; i < adHosts.length; i++) {
        if (dnsDomainIs(host, "." + adHosts[i]) || host === adHosts[i]) {
            return "PROXY 127.0.0.1:8080";
        }
    }

    return "DIRECT";
}
