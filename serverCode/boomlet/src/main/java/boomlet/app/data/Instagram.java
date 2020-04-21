package boomlet.app.data;

public class Instagram {
	
	private long id;
	private long influencer_id;
	private String link;
	private String followers;
	private String video_cost;
	private String story_cost;
	private String post_cost;
	private boolean verified;
	private boolean active;
	
	public Instagram() {	
	}

	public Instagram(long id, long influencer_id, String link, String followers, String video_cost, String story_cost,
			String post_cost, boolean verified, boolean active) {
		super();
		this.id = id;
		this.influencer_id = influencer_id;
		this.link = link;
		this.followers = followers;
		this.video_cost = video_cost;
		this.story_cost = story_cost;
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

	public String getFollowers() {
		return followers;
	}

	public void setFollowers(String followers) {
		this.followers = followers;
	}

	public String getVideo_cost() {
		return video_cost;
	}

	public void setVideo_cost(String video_cost) {
		this.video_cost = video_cost;
	}

	public String getStory_cost() {
		return story_cost;
	}

	public void setStory_cost(String story_cost) {
		this.story_cost = story_cost;
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
		return "Instagram [id=" + id + ", influencer_id=" + influencer_id + ", link=" + link + ", followers="
				+ followers + ", video_cost=" + video_cost + ", story_cost=" + story_cost + ", post_cost=" + post_cost
				+ ", verified=" + verified + ", active=" + active + "]";
	}
	
	

}
