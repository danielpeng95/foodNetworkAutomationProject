module.exports = {
    url: 'https://www.foodnetwork.com',
    
    elements: { 

        //log in log out
        burger: '[class="a-Icon a-Icon--menu o-HeaderFresh__a-Icon o-HeaderFresh__a-Icon--menu"]',
        logIn: '[class="m-ProfileInfo__a-Button--Login"]',
        email: '[class="gigya-input-text gigya-valid"]',
        // email: {selector: '(//input[@name=“username”])[1]', locateStrategy: 'xpath'},
        password: '[class="gigya-input-password gigya-valid"]',
        submit: {selector: '(//input[@data-screenset-element-id="__gig_template_element_10_1571334231948"])[1]', locateStrategy: 'xpath'},
        nickName: '[class="m-ProfileInfo__a-Nickname"]',


    }
    
}