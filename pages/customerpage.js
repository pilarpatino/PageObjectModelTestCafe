import {Selector, t} from 'test'

class CustomerPage {
    constructor() {
        this.ordersLink = Selector('a').withText('Orders')
        this.noOrderLabel = Selector('div.no-data').withText('No orders')

    }
}

export default CustomerPage();