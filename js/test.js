
(async () => {
    const ccxt = require ('ccxt')
    
    let symbol = 'XRP/USD'
    
    let exchange = new ccxt.kraken()
    // let exchange = new ccxt.xrpl()
    let orderbook = await exchange.fetchOrderBook(symbol)

    console.log(JSON.stringify(orderbook, null, 4))

}) ()

