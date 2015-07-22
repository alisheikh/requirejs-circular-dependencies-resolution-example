define(["jquery", "VisitType", "Visit"
], function ($, VisitType, Visit) {

    function OneTimeVisit() {
        Visit.apply(this, arguments);

        var defaults = $.extend({
            startDate: null
        }, arguments[0]);

        this.displayType = "One-Time";
        this.startDate = defaults.startDate;
    }

    $.extend(OneTimeVisit.prototype, Visit.prototype);

    $.extend(OneTimeVisit.prototype, {
        toDto: function () {
            var dto = Visit.prototype.toDto.call(this);
            dto.type = VisitType["One-Time"];
            dto.startDate = this.startDate;
            return dto;
        }
    });

    return OneTimeVisit;
});