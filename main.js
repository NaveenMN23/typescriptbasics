var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Website = /** @class */ (function () {
    function Website(WebsiteURL, WebsiteTitle) {
        var _this = this;
        this.getThisWebsite = function () {
            return _this.WebsiteURL + " " + _this.WebsiteTitle;
        };
        this.WebsiteURL = WebsiteURL;
        this.WebsiteTitle = WebsiteTitle;
    }
    return Website;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setUserDetails = function (UserName, MailID) {
            _this.UserName = UserName;
            _this.MailID = MailID;
        };
        _this.getUserDetails = function () {
            return _this.WebsiteTitle + " " + _this.UserName + " " + _this.MailID;
        };
        return _this;
    }
    return User;
}(Website));
var Youtube = /** @class */ (function (_super) {
    __extends(Youtube, _super);
    function Youtube(WebsiteURL, WebsiteTitle, VideoTitle, ChannelName, VideoComments, History, LikedVideos, WatchLater, RecomendedVideo, Trending, Subscriptions) {
        var _this = _super.call(this, WebsiteURL, WebsiteTitle) || this;
        _this.Subscription = "";
        _this.getVideoLikesCount = function () {
            return 500;
        };
        _this.getVideoUnLikesCount = function () {
            return 2;
        };
        _this.getVideoShareCount = function () {
            return 100;
        };
        _this.getVideoViewsCount = function () {
            return 1200;
        };
        _this.getVideoCommentsCount = function () {
            return _this.VideoComments.length;
        };
        _this.getSubscriptionStatus = function () {
            for (var _i = 0, _a = _this.Subscriptions; _i < _a.length; _i++) {
                var subscriptionItems = _a[_i];
                if (subscriptionItems[0] == _this.ChannelName) {
                    return true;
                }
            }
            return false;
        };
        _this.getHistoryCount = function () {
            return _this.History.length;
        };
        _this.getLikedVideosCount = function () {
            return _this.LikedVideos.length;
        };
        _this.getWatchLaterCount = function () {
            return _this.WatchLater.length;
        };
        _this.getSubscriptionCount = function () {
            return _this.Subscriptions.length;
        };
        _this.getSubscription = function () {
            for (var _i = 0, _a = _this.Subscriptions; _i < _a.length; _i++) {
                var subscriptionItems = _a[_i];
                _this.Subscription += subscriptionItems[0] + " " + "has" + " " + subscriptionItems[1] + " " + "new Videos. \n";
            }
            return _this.Subscription;
        };
        _this.getUserDetails = function () {
            _this.HistoryCount = _this.getHistoryCount();
            _this.LikedVideosCount = _this.getLikedVideosCount();
            _this.WatcherLaterCount = _this.getWatchLaterCount();
            _this.SubscriptionCount = _this.getSubscriptionCount();
            _this.SubscriptionDetails = _this.getSubscription();
            _this.VideoLikesCount = _this.getVideoLikesCount();
            _this.VideoUnLikesCount = _this.getVideoUnLikesCount();
            _this.VideoShareCount = _this.getVideoShareCount();
            _this.VideoViewsCount = _this.getVideoViewsCount();
            _this.VideoCommentsCount = _this.getVideoCommentsCount();
            _this.Subscribed = _this.getSubscriptionStatus();
            return "WebSiteName: " + _this.WebsiteTitle
                + "\n Logged in as: " + _this.UserName + "\n Email: " + _this.MailID
                + "\n Video Title: " + _this.VideoTitle
                + "\n Like: " + _this.VideoLikesCount
                + "\n UnLike: " + _this.VideoUnLikesCount
                + "\n Share: " + _this.VideoShareCount
                + "\n Views: " + _this.VideoViewsCount
                + "\n Comments (" + _this.VideoCommentsCount + ")"
                + " " + _this.VideoComments
                + "\n Channel Name: " + _this.ChannelName
                + "\n Subscribed: " + _this.Subscribed
                + "\n History (" + _this.HistoryCount + "): " + _this.History
                + "\n Liked Videos (" + _this.LikedVideosCount + "): " + _this.LikedVideos
                + "\n Watch Later (" + _this.WatcherLaterCount + "): " + _this.WatchLater
                + "\n Recommended Video: " + _this.RecomendedVideo
                + "\n Trending Videos: " + _this.Trending
                + "\n Subscription (" + _this.SubscriptionCount + "): " + _this.SubscriptionDetails;
        };
        _this.VideoTitle = VideoTitle;
        _this.VideoComments = VideoComments;
        _this.ChannelName = ChannelName;
        _this.History = History;
        _this.LikedVideos = LikedVideos;
        _this.WatchLater = WatchLater;
        _this.RecomendedVideo = RecomendedVideo;
        _this.Trending = Trending;
        _this.Subscriptions = Subscriptions;
        return _this;
    }
    return Youtube;
}(User));
var Facebook = /** @class */ (function (_super) {
    __extends(Facebook, _super);
    function Facebook(WebsiteURL, WebsiteTitle, WorksAt, Studied, Livesin, From, Mobilenumber, Relationship, FamilyMembers, BloodGroup, DonatedBlood, AboutYou, FavouriteQuotes) {
        var _this = _super.call(this, WebsiteURL, WebsiteTitle) || this;
        _this.getWorkDetails = function () {
            for (var WorkDetailItems in _this.WorksAt) {
                if (WorkDetailItems == "0") {
                    _this.WorksAtDetails = _this.WorksAt[WorkDetailItems][0] + " " + "at" + " " + _this.WorksAt[WorkDetailItems][1];
                }
                else {
                    _this.WorksAtDetails += "\n Past: " + _this.WorksAt[WorkDetailItems][0] + " " + "at" + " " + _this.WorksAt[WorkDetailItems][1];
                }
            }
            return _this.WorksAtDetails;
        };
        _this.getStudyDetails = function () {
            for (var StudyDetailItems in _this.Studied) {
                if (StudyDetailItems == "0") {
                    _this.StudiedAtDetails = _this.Studied[StudyDetailItems][0] + " " + "at" + " " + _this.Studied[StudyDetailItems][1];
                }
                else {
                    _this.StudiedAtDetails += "\n Past: " + _this.Studied[StudyDetailItems][0] + " " + "at" + " " + _this.Studied[StudyDetailItems][1];
                }
            }
            return _this.StudiedAtDetails;
        };
        _this.getFamilyMembersCount = function () {
            return _this.FamilyMembers.length;
        };
        _this.getFamilyMembers = function () {
            for (var _i = 0, _a = _this.FamilyMembers; _i < _a.length; _i++) {
                var FamilyDetailItems = _a[_i];
                _this.FamilyMembersDetails = FamilyDetailItems[0] + "\n" + FamilyDetailItems[1];
            }
            return _this.FamilyMembersDetails;
        };
        _this.getUserDetails = function () {
            _this.WorksDetail = _this.getWorkDetails();
            _this.StudiedDetail = _this.getStudyDetails();
            _this.FamilyMembersCount = _this.getFamilyMembersCount();
            _this.FamilyMember = _this.getFamilyMembers();
            return "WebSiteName: " + _this.WebsiteTitle
                + "\n Logged in as: " + _this.UserName + "\n Email: " + _this.MailID
                + "\n Work: " + _this.WorksDetail
                + "\n Studied " + _this.StudiedDetail
                + "\n Lives in " + _this.Livesin
                + "\n From " + _this.From
                + "\n Contact me " + _this.Mobilenumber
                + "\n Relationship " + _this.Relationship
                + "\n Family Member (" + _this.FamilyMembersCount + ")" + _this.FamilyMember
                + "\n Blood Group " + _this.BloodGroup
                + "\n Donated Blood" + " " + _this.DonatedBlood
                + "\n About You " + _this.AboutYou
                + "\n Favourite Quote " + _this.FavouriteQuotes;
        };
        _this.WorksAt = WorksAt;
        _this.Studied = Studied;
        _this.Livesin = Livesin;
        _this.From = From;
        _this.Mobilenumber = Mobilenumber;
        _this.Relationship = Relationship;
        _this.FamilyMembers = FamilyMembers;
        _this.BloodGroup = BloodGroup;
        _this.DonatedBlood = DonatedBlood;
        _this.AboutYou = AboutYou;
        _this.FavouriteQuotes = FavouriteQuotes;
        return _this;
    }
    return Facebook;
}(User));
var YoutubeDetails = new Youtube('Youtube.com', 'Youtube', 'Whats up Kovai', 'Madras Central', ["Nyc one"], ["Madras Central", "Put Chutney"], ["Madras Central"], ["Technology", "Football"], ["Ronaldo five goals"], ["Punjab VS Hyderabad"], [["Madras Central", 1], ["Put Chutney", 1], ["Technology", 3], ["Football", 0]]);
YoutubeDetails.setUserDetails("Naveen", "naveen23992@gmail.com");
console.log(YoutubeDetails.getUserDetails());
var FacebookDetails = new Facebook('Facebook.com', 'Facebook', [["Associate", "Cognizant Technology Solutions India Pvt. Ltd , Coimbatore"], ["Programmer Analyst", "Cognizant Technology Solutions India Pvt. Ltd , Kochi"], ["Programmer Analyst Trainee", "Cognizant Technology Solutions India Pvt. Ltd , Coimbatore"]], [["B.E Computer Science and Engineering", "Info Institute f Engineering"], ["XII Std", "ST. Thomas Higher Secondary School"], ["X Std", "ST. Thomas Higher Secondary School"]], 'Coimbatore', 'Coimbatore', 9659635774, 'Single', [["Nandhini", "Sister"], ["Arun", "Cousin"]], "B+ve", "Yes", "Am an Joyful person", "Beleive in Yourself");
FacebookDetails.setUserDetails("Naveen", "naveen23992@gmail.com");
console.log(FacebookDetails.getUserDetails());
