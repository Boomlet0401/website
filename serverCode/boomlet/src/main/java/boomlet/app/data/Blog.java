package boomlet.app.data;

public class Blog {
	
	private long id;
	private long influencer_id;
	private String link;	
	private String page_view;	
	private String acticle_cost;	
	private boolean active;
	
	public Blog() {		
	}

	public Blog(long id, long influencer_id, String link, String page_view, String acticle_cost, boolean active) {
		super();
		this.id = id;
		this.influencer_id = influencer_id;
		this.link = link;
		this.page_view = page_view;
		this.acticle_cost = acticle_cost;
		this.active = active;
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

	public String getPage_view() {
		return page_view;
	}

	public void setPage_view(String page_view) {
		this.page_view = page_view;
	}

	public String getActicle_cost() {
		return acticle_cost;
	}

	public void setActicle_cost(String acticle_cost) {
		this.acticle_cost = acticle_cost;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Blog [id=" + id + ", influencer_id=" + influencer_id + ", link=" + link + ", page_view=" + page_view
				+ ", acticle_cost=" + acticle_cost + ", active=" + active + "]";
	}

	

}
