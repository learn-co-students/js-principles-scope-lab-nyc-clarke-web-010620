// Write your solution in this file!

var customerName = 'bob'
const leastFavoriteCustomer = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not bob'
    return leastFavoriteCustomer
}