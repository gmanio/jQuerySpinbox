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
            nCurrentVal : 0
        },

        init: function () {
            this.config = $.extend(true, {}, this.defaults, this.options);
            this._attachedEvent();
        },

        _attachedEvent: function(){
            this.welIncrease = this.$el.find('[data-spinbox-increase]');
            this.welDecrease = this.$el.find('[data-spinbox-decrease]');
            this.welInput = this.$el.find('[data-spinbox-input]');

            this.welIncrease.on('click', $.proxy(this._onIncreaseBtn, this));
            this.welDecrease.on('click', $.proxy(this._onDecreaseBtn, this));
        },

        _onIncreaseBtn: function(){
            this.config.nCurrentVal += 1;
            this._updateView();
        },

        _onDecreaseBtn: function(){
            this.config.nCurrentVal -= 1;
            this._updateView();
        },

        _updateView: function(){
            this.welInput.val(this.config.nCurrentVal);
        }
    }

    Plugin.defaults = Plugin.prototype.defaults;

    $.fn.spinbox = function(options) {
        return this.each(function() {
            new Plugin(this, options).init();
        });
    };

}($, window, document));