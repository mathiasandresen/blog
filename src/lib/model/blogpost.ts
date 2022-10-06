export type BlogPost = {
	slug: string;
	metadata: {
		title: string;
		standfirst?: string;
		date: string;
		tags?: string[];
		wip?: boolean;
	};
};
