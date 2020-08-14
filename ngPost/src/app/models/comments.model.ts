export class Comments {
    public commentId: number;
    public postId: number;
    public userId: number;
    public userName: string;
    public comment: string;
    public date: string;
    constructor(
        commentId: number,
        postId: number,
        userId: number,
        userName: string,
        comment: string,
        date: string
    ) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.userName = userName;
        this.comment = comment;
        this.date = date;
    }
}