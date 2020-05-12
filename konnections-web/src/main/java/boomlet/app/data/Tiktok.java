package boomlet.app.data;

public class Tiktok {
	
	private long id;
	private long influencer_id;
	private String link;
	private String fans;
	private String hearts;	
	private String post_cost;
	private boolean verified;
	private boolean active;
	
	public Tiktok() {	
	}

	
	public String getFans() {
		return fans;
	}


	public void setFans(String fans) {
		this.fans = fans;
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

	
	public String getHearts() {
		return hearts;
	}

	public void setHearts(String hearts) {
		this.hearts = hearts;
	}

	public String getPost_cost() {
		return post_cost;
	}

	public void setPost_cost(String post_cost) {
		this.post_cost = post_cost;
	}

	public boolean isVerified() {
		return verified;
	}

	public void setVerified(boolean verified) {
		this.verified = verified;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	
}
