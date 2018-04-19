class Website{
    private WebsiteURL: string;
    protected WebsiteTitle: string;
    constructor(WebsiteURL: string, WebsiteTitle: string){
        this.WebsiteURL = WebsiteURL;
        this.WebsiteTitle = WebsiteTitle;
    }
    getThisWebsite = () => {
        return this.WebsiteURL + " " + this.WebsiteTitle;
    }
}

class User extends Website{
    protected UserName: string;
    protected MailID: string;
    setUserDetails = (UserName:string, MailID:string) => {
        this.UserName = UserName;
        this.MailID = MailID;
    }
    getUserDetails = (): string => {
        return this.WebsiteTitle + " " + this.UserName + " " + this.MailID;
    }
}

class Youtube extends User{
    private VideoTitle: string;
    private VideoLikesCount: number;
    private VideoUnLikesCount: number;
    private VideoShareCount: number;
    private VideoViewsCount: number;
    private VideoComments: string[];
    private VideoCommentsCount: number;
    private ChannelName: string;
    private Subscribed: boolean;
    private History: string[];
    private HistoryCount : number;
    private LikedVideos: string[];
    private LikedVideosCount: number;
    private WatchLater: string[];
    private WatcherLaterCount: number;
    private RecomendedVideo: string[];
    private Trending: string[];
    private Subscriptions: [string,number][];
    private SubscriptionCount: number;
    private Subscription: string = "";
    private SubscriptionDetails: string;
    constructor(WebsiteURL: string, WebsiteTitle: string, VideoTitle: string, ChannelName: string, VideoComments: string[], History: string[], LikedVideos: string[], WatchLater: string[], RecomendedVideo: string[], Trending: string[], Subscriptions: [string,number][]){
        super(WebsiteURL,WebsiteTitle);
        this.VideoTitle = VideoTitle;
        this.VideoComments = VideoComments;
        this.ChannelName = ChannelName;
        this.History = History;
        this.LikedVideos = LikedVideos;
        this.WatchLater = WatchLater;
        this.RecomendedVideo = RecomendedVideo;
        this.Trending = Trending;
        this.Subscriptions = Subscriptions;
    }
    getVideoLikesCount = () => {
        return 500;
    }
    getVideoUnLikesCount = () => {
        return 2;
    }
    getVideoShareCount = () => {
        return 100;
    }
    getVideoViewsCount = () => {
        return 1200;
    }
    getVideoCommentsCount = () => {
        return this.VideoComments.length;
    }
    getSubscriptionStatus = () => {
        for(let subscriptionItems of this.Subscriptions){
            
            if(subscriptionItems[0] == this.ChannelName){
                return true;
            }
        }
        return false;
    }
    getHistoryCount = () => {
        return this.History.length;
    }
    getLikedVideosCount = () => {
        return this.LikedVideos.length;
    }
    getWatchLaterCount = () => {
        return this.WatchLater.length;
    }
    getSubscriptionCount = () => {
        return this.Subscriptions.length;
    }
    getSubscription = () => {
        for(let subscriptionItems of this.Subscriptions){
            
            this.Subscription += subscriptionItems[0] + " " + "has" + " " + subscriptionItems[1] + " " + "new Videos. \n";
        }
        return this.Subscription;
    }
    getUserDetails = (): string => {
        this.HistoryCount = this.getHistoryCount();
        this.LikedVideosCount = this.getLikedVideosCount();
        this.WatcherLaterCount = this.getWatchLaterCount();
        this.SubscriptionCount = this.getSubscriptionCount();
        this.SubscriptionDetails = this.getSubscription();
        this.VideoLikesCount = this.getVideoLikesCount();
        this.VideoUnLikesCount = this.getVideoUnLikesCount();
        this.VideoShareCount = this.getVideoShareCount();
        this.VideoViewsCount = this.getVideoViewsCount();
        this.VideoCommentsCount = this.getVideoCommentsCount();
        this.Subscribed = this.getSubscriptionStatus();
        return "WebSiteName: " + this.WebsiteTitle 
        + "\n Logged in as: " + this.UserName + "\n Email: " + this.MailID
        + "\n Video Title: " + this.VideoTitle
        + "\n Like: " + this.VideoLikesCount
        + "\n UnLike: " + this.VideoUnLikesCount
        + "\n Share: " + this.VideoShareCount
        + "\n Views: " + this.VideoViewsCount
        + "\n Comments (" + this.VideoCommentsCount + ")" 
        + " " + this.VideoComments
        + "\n Channel Name: " + this.ChannelName
        + "\n Subscribed: " +  this.Subscribed 
        + "\n History (" + this.HistoryCount + "): " + this.History 
        +"\n Liked Videos (" +this.LikedVideosCount +"): " + this.LikedVideos 
        + "\n Watch Later (" +this.WatcherLaterCount +"): " + this.WatchLater
        + "\n Recommended Video: " +this.RecomendedVideo 
        +"\n Trending Videos: " +this.Trending 
        + "\n Subscription (" + this.SubscriptionCount + "): " + this.SubscriptionDetails;
    }
}

class Facebook extends User{
    private WorksAt: [string,string][];
    private WorksAtDetails: string;
    private WorksDetail : string;
    private Studied: [string,string][];
    private StudiedAtDetails: string;
    private StudiedDetail : string;
    private Livesin: string;
    private From: string;
    private Mobilenumber:number;
    private Relationship: string;
    private FamilyMembers: [string,string][];
    private FamilyMembersCount : number;
    private FamilyMembersDetails : string;
    private FamilyMember: string;
    private BloodGroup:string;
    private DonatedBlood: string;
    private AboutYou: string;
    private FavouriteQuotes: string;

    constructor(WebsiteURL: string, WebsiteTitle: string, WorksAt: [string,string][], Studied: [string,string][], Livesin: string, From: string, Mobilenumber:number, Relationship: string, FamilyMembers: [string,string][], BloodGroup:string, DonatedBlood: string, AboutYou: string, FavouriteQuotes: string){
        super(WebsiteURL,WebsiteTitle);
        this.WorksAt = WorksAt;
        this.Studied = Studied;
        this.Livesin = Livesin;
        this.From = From;
        this.Mobilenumber = Mobilenumber;
        this.Relationship = Relationship;
        this.FamilyMembers = FamilyMembers;
        this.BloodGroup = BloodGroup;
        this.DonatedBlood = DonatedBlood;
        this.AboutYou = AboutYou;
        this.FavouriteQuotes = FavouriteQuotes;
    }

    getWorkDetails = () => {
        for(let WorkDetailItems in this.WorksAt){
            if(WorkDetailItems == "0"){
                this.WorksAtDetails = this.WorksAt[WorkDetailItems][0] + " " + "at" + " " + this.WorksAt[WorkDetailItems][1];
            }
            else{
                this.WorksAtDetails += "\n Past: " + this.WorksAt[WorkDetailItems][0] + " " + "at" + " " + this.WorksAt[WorkDetailItems][1];
            }
        }
        return this.WorksAtDetails;
    }
    getStudyDetails = () => {
        for(let StudyDetailItems in this.Studied){
            if(StudyDetailItems == "0"){
                this.StudiedAtDetails = this.Studied[StudyDetailItems][0] + " " + "at" + " " + this.Studied[StudyDetailItems][1];
            }
            else{
                this.StudiedAtDetails += "\n Past: " + this.Studied[StudyDetailItems][0] + " " + "at" + " " + this.Studied[StudyDetailItems][1];
            }
        }
        return this.StudiedAtDetails;
    }
    getFamilyMembersCount = () => {
        return this.FamilyMembers.length;
    }
    getFamilyMembers = () =>{
        for(let FamilyDetailItems of this.FamilyMembers){
                this.FamilyMembersDetails = FamilyDetailItems[0] + "\n" + FamilyDetailItems[1];
        }
        return this.FamilyMembersDetails;
    }
    getUserDetails = (): string => {
        this.WorksDetail = this.getWorkDetails();
        this.StudiedDetail = this.getStudyDetails();
        this.FamilyMembersCount = this.getFamilyMembersCount();
        this.FamilyMember = this.getFamilyMembers();
        return "WebSiteName: " + this.WebsiteTitle 
        + "\n Logged in as: " + this.UserName + "\n Email: " + this.MailID 
        + "\n Work: " + this.WorksDetail 
        + "\n Studied " + this.StudiedDetail
        + "\n Lives in " + this.Livesin
        + "\n From " + this.From
        + "\n Contact me " + this.Mobilenumber
        + "\n Relationship " + this.Relationship 
        + "\n Family Member (" + this.FamilyMembersCount + ")" + this.FamilyMember
        + "\n Blood Group " + this.BloodGroup
        + "\n Donated Blood" + " " + this.DonatedBlood
        + "\n About You " + this.AboutYou
        + "\n Favourite Quote " + this.FavouriteQuotes ;
    }
}

let YoutubeDetails = new Youtube('Youtube.com','Youtube','Whats up Kovai','Madras Central',["Nyc one"],["Madras Central","Put Chutney"],["Madras Central"],["Technology","Football"],["Ronaldo five goals"],["Punjab VS Hyderabad"],[["Madras Central",1],["Put Chutney",1],["Technology",3],["Football",0]]);
YoutubeDetails.setUserDetails("Naveen","naveen23992@gmail.com");
console.log(YoutubeDetails.getUserDetails());


let FacebookDetails = new Facebook('Facebook.com','Facebook',[["Associate","Cognizant Technology Solutions India Pvt. Ltd , Coimbatore"],["Programmer Analyst","Cognizant Technology Solutions India Pvt. Ltd , Kochi"],["Programmer Analyst Trainee","Cognizant Technology Solutions India Pvt. Ltd , Coimbatore"]],[["B.E Computer Science and Engineering","Info Institute f Engineering"],["XII Std","ST. Thomas Higher Secondary School"],["X Std","ST. Thomas Higher Secondary School"]],'Coimbatore','Coimbatore',9659635774,'Single',[["Nandhini","Sister"],["Arun","Cousin"]],"B+ve","Yes","Am an Joyful person","Beleive in Yourself");
FacebookDetails.setUserDetails("Naveen","naveen23992@gmail.com");
console.log(FacebookDetails.getUserDetails());



