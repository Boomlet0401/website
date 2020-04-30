package boomlet.app.data;

public class Youtube {
	
	private long id;
	private long influencer_id;
	private String link;
	private long subscribers;	
	private String video_cost;
	private boolean verified;
	
	public Youtube(){
		
	}
	
	
	public Youtube(long id, long influencer_id, String link, long subscribers, String video_cost, boolean verified) {
		super();
		this.id = id;
		this.influencer_id = influencer_id;
		this.link = link;
		this.subscribers = subscribers;
		this.video_cost = video_cost;
		this.verified = verified;
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


	public long getSubscribers() {
		return subscribers;
	}


	public void setSubscribers(long subscribers) {
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
