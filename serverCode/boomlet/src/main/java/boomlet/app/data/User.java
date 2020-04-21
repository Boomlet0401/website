package boomlet.app.data;


public class User {
	
	private long id;
    private String name;
    private String email;
    private String pass;
    private boolean active;
    private String active_note;
    private String scops;
    private String mobile;
    
    public User() {
    }
    
    public User(long id, String name, String email, String pass, boolean active, String active_note, String scops,
			String mobile) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.pass = pass;
		this.active = active;
		this.active_note = active_note;
		this.scops = scops;
		this.mobile = mobile;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getScops() {
		return scops;
	}

	public void setScops(String scops) {
		this.scops = scops;
	}
 
   
	public long getId() {
		return id;
	}	

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getActive_note() {
		return active_note;
	}

	public void setActive_note(String active_note) {
		this.active_note = active_note;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", pass=" + pass + ", active=" + active
				+ ", active_note=" + active_note + ", scops=" + scops + ", mobile=" + mobile + "]";
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

}
