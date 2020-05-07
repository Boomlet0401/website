package boomlet.app.data;

import java.sql.Date;

public class UpdateInfluencer {
	
	private long influencer_id;
	private String data;
	private String request_by;
	private long request_by_id;
	private String approved_by;
	private long approved_by_id;
	private Date created_date;
	private Date action_date;
	private String status;
	private boolean approved;	
	
	public long getInfluencer_id() {
		return influencer_id;
	}
	public void setInfluencer_id(long influencer_id) {
		this.influencer_id = influencer_id;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getRequest_by() {
		return request_by;
	}
	public void setRequest_by(String request_by) {
		this.request_by = request_by;
	}
	public long getRequest_by_id() {
		return request_by_id;
	}
	public void setRequest_by_id(long request_by_id) {
		this.request_by_id = request_by_id;
	}
	public String getApproved_by() {
		return approved_by;
	}
	public void setApproved_by(String approved_by) {
		this.approved_by = approved_by;
	}
	public long getApproved_by_id() {
		return approved_by_id;
	}
	public void setApproved_by_id(long approved_by_id) {
		this.approved_by_id = approved_by_id;
	}
	public Date getCreated_date() {
		return created_date;
	}
	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}
	public Date getAction_date() {
		return action_date;
	}
	public void setAction_date(Date action_date) {
		this.action_date = action_date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public boolean isApproved() {
		return approved;
	}
	public void setApproved(boolean approved) {
		this.approved = approved;
	}
	
	

}
