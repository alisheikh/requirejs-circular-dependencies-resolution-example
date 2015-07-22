
define([ "ko",
    "OneTimeVisit",
    "HourlyVisit",
    "RecurrentVisit",
    "Visit",
    "domReady!"
], function (ko, OneTimeVisit, HourlyVisit, RecurrentVisit, Visit) {
    
    function VisitsViewModel() {
        this.visits = ko.observableArray([]);        
        this.visitDisplayTemplate = function (visit, context) {
            if (visit instanceof OneTimeVisit) return "oneTimeVisitDisplayTemplate";
            if (visit instanceof HourlyVisit) return "hourlyVisitDisplayTemplate";
            if (visit instanceof RecurrentVisit) return "recurrentVisitDisplayTemplate";

            throw "No template found for Visit type '" + typeof visit + "'.";
        };
        
        this.init = function(Visits){
            this.visits(ko.utils.arrayMap(Visits, function(v) { return Visit.create(v); }));
        }
    };

    return VisitsViewModel;
});