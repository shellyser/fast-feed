//Social media share link object
class ShareLinkDialog {
    constructor(width, height) {
        this.$btnSocial = $('.article-socialmedia a');
        this.dialogWidth = width;
        this.dialogHeight = height;
        this.bindEvents();
    }
    //bind click event on social media to the trigger dialog function
    bindEvents() {
        this.$btnSocial.on('click', this.triggerDialog.bind(this));
    }
    //sets dialog size and location on browser's window
    setupDialog(event){
        this.url = event.target.href || event.target.parentNode.href;
        var left = (window.innerWidth  - this.dialogWidth)  / 2,
            top  = (window.innerHeight - this.dialogHeight) / 2;  
            return 'status=1' + ',width=' + this.dialogWidth  + ',height=' + this.dialogHeight + ',top=' + top + ',left=' + left;
    }
    //opens dialog when social media button is clicked
    triggerDialog(options) {
        event.preventDefault();
        this.options = this.setupDialog(event);
        window.open(this.url, 'twitter', this.options);
        return false;
    }
}

var FFsharelinks = new ShareLinkDialog(575, 400);



	