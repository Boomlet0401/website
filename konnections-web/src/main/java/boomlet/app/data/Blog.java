package boomlet.app.data;

public class Blog {
	
	private long id;
	private long influencer_id;
	private String link;	
	private String page_views;	
	private String article_cost;	
	private boolean active;
	
	public Blog() {		
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getInfluencer_id() {
		return influencer_id;
	}

	public void setInfluencer_id(long influencer_id) {
		this.influencer_id = influencer_id;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

		
	public String getPage_views() {
		return page_views;
	}


	public void setPage_views(String page_views) {
		this.page_views = page_views;
	}


	public String getArticle_cost() {
		return article_cost;
	}


	public void setArticle_cost(String article_cost) {
		this.article_cost = article_cost;
	}


	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	

}
