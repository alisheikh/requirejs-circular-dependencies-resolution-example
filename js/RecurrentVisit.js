define(["jquery", "VisitType", "Visit" ], function ($, VisitType, Visit) {

    function RecurrentVisit() {
        Visit.apply(this, arguments);

        var defaults = $.extend({
            startTime: null,
            days: []
        }, arguments[0]);

        this.displayType = "Recurrent";
        this.startTime = defaults.startTime;
        this.days = defaults.days;        
        this.daysString = defaults.days.join(", ")
    };

    $.extend(RecurrentVisit.prototype, Visit.prototype);

    $.extend(RecurrentVisit.prototype, {
        toDto: function () {
            var dto = Visit.prototype.toDto.call(this);
            dto.type = VisitType["Recurrent"];
            dto.startTime = this.startTime;
            dto.days = this.days;
            return dto;
        }
    });

    return RecurrentVisit;
});
