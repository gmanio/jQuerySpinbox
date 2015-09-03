/**
 * @date 2015.09.03
 * @description jquery Spinbox Plugin
 */

(function () {
    var Plugin = function (el, options) {
        this.el = el;
        this.$el = $(this.el);
        this.options = options;
    }

    Plugin.prototype = {
        defaults: {
            message: 'Hello world!'
        },

        init: function (htOption) {
            this.config = $.extend({}, this.defaults, this.options);

            this._attachedEvent();
        },

        _attachedEvent: function(){
            this.welIncrease = this.$el.find('[data-spinbox-increase]');
            this.welDecrease = this.$el.find('[data-spinbox-decrease]');
            this.welInput = this.$el.find('[data-spinbox-input]');
            this.nCurrentVal = 0;

            this.welIncrease.on('click', $.proxy(this._onIncreaseBtn, this));
            this.welDecrease.on('click', $.proxy(this._onDecreaseBtn, this));
        },

        _onIncreaseBtn: function(){
            this.nCurrentVal += 1;
            this._updateView();
        },

        _onDecreaseBtn: function(){
            this.nCurrentVal -= 1;
            this._updateView();
        },

        _updateView: function(){
            this.welInput.val(this.nCurrentVal);
        }
    }

    Plugin.defaults = Plugin.prototype.defaults;

    $.fn.spinbox = function(options) {
        return this.each(function() {
            new Plugin(this, options).init();
        });
    };

}($, window, document));