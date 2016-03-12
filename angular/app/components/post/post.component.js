class PostController{
    constructor(API, $log){
        'ngInject';

		this.API = API;
		this.$log = $log;
		this.getPosts();
    }

	getPosts(){
		this.API.all('post').customGET('/')
			.then((response) => {
				this.posts = response.data;
			});

		this.$log.log(this.posts);
	}
}

export const PostComponent = {
    templateUrl: './views/app/components/post/post.component.html',
    controller: PostController,
    controllerAs: 'vm',
    bindings: {}
};


