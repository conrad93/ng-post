export class Posts {
    public adminId: number;
    public adminName: string;
    public commentCount: number;
    public date: string;
    public description: string;
    public image: string;
    public postId: number;
    public title: string;
    constructor(
        adminId: number,
        adminName: string,
        commentCount: number,
        date: string,
        description: string,
        image: string,
        postId: number,
        title: string
    ) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.commentCount = commentCount;
        this.date = date;
        this.description = description;
        this.image = image;
        this.postId = postId;
        this.title = title;
    }
}