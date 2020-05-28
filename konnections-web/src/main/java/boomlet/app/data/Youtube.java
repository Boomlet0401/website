package boomlet.app.data;

public class Youtube {
	
	private long id;
	private long influencer_id;
	private String link;
	private String subscribers;	
	private String video_cost;
	private boolean verified;
	
	public Youtube(){
		
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


	public String getSubscribers() {
		return subscribers;
	}


	public void setSubscribers(String subscribers) {
		this.subscribers = subscribers;
	}


	public String getVideo_cost() {
		return video_cost;
	}


	public void setVideo_cost(String video_cost) {
		this.video_cost = video_cost;
	}


	public boolean isVerified() {
		return verified;
	}


	public void setVerified(boolean verified) {
		this.verified = verified;
	}
	
	
	

}
