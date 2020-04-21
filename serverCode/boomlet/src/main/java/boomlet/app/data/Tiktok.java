package boomlet.app.data;

public class Tiktok {
	
	private long id;
	private long influencer_id;
	private String link;
	private String fan;
	private String hearts;	
	private String post_cost;
	private boolean verified;
	private boolean active;
	
	public Tiktok() {	
	}

	public Tiktok(long id, long influencer_id, String link, String fan, String hearts, String post_cost,
			boolean verified, boolean active) {
		super();
		this.id = id;
		this.influencer_id = influencer_id;
		this.link = link;
		this.fan = fan;
		this.hearts = hearts;
		this.post_cost = post_cost;
		this.verified = verified;
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

	public String getFan() {
		return fan;
	}

	public void setFan(String fan) {
		this.fan = fan;
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

	@Override
	public String toString() {
		return "Tiktok [id=" + id + ", influencer_id=" + influencer_id + ", link=" + link + ", fan=" + fan + ", hearts="
				+ hearts + ", post_cost=" + post_cost + ", verified=" + verified + ", active=" + active + "]";
	}	
	

}
