package boomlet.web.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Predicate;

import boomlet.app.dao.UserDAO;
import boomlet.app.dao.UserTokenDAO;
import boomlet.app.data.User;
import boomlet.app.data.UserToken;

public class AccessChecker {

	private Map<String, Object> requestHeader;
	private Map<String, Object> response;
	private boolean access;
	private boolean admin;
	private boolean editor;
	private boolean publisher;
	private boolean manager;
	private boolean client;
	
	private String token;
	private UserDAO userDAO;
	private UserTokenDAO userTokenDAO;
	private UserToken userToken;
	private User user;
	
	public boolean userHaveAdminAcceess;
	public boolean userHaveEditorAcceess;
	public boolean userHavePublisherAcceess;
	public boolean userHaveManagerAcceess;
	public boolean userHaveClientAccess;

	public AccessChecker(Map<String, Object> requestHeader, UserDAO userDAO, UserTokenDAO userTokenDAO) {
		this.requestHeader = requestHeader;
		this.userDAO = userDAO;
		this.userTokenDAO = userTokenDAO;

		this.response = new HashMap<String, Object>();
		this.access = false;
		this.admin = true;
		this.editor = false;
		this.publisher = false;
		this.manager = false;
		this.client = false;
		this.token = null;
		
		this.userHaveAdminAcceess = false;
		this.userHaveEditorAcceess = false;
		this.userHavePublisherAcceess = false;
		this.userHaveManagerAcceess = false;
		this.userHaveClientAccess = false;
		
		CheckUser();
	}

	private void CheckUser() {
		String token = (String) this.requestHeader.get("token");
		if (token == null) {
			this.response.put("authentication", "fail");
			this.response.put("status_code", 111);
			this.response.put("message", "Token not found");
			this.response.put("status", "error");
			return;
		}

		this.token = token;
		// if token found check token valid or not
		UserToken uToken = new UserToken();
		uToken.setToken(token);

		UserToken userToken = userTokenDAO.checkToken(uToken);
		if (userToken == null) {
			this.response.put("authentication", "fail");
			this.response.put("status_code", 112);
			this.response.put("message", "Invalid Token. Please login again");
			this.response.put("status", "error");
			this.userToken = null;
			return;
		}
		
		this.userToken = userToken;
		
		User user = userDAO.getById(userToken.getUser_id());
		if(user == null) {
			this.response.put("authentication", "fail");
			this.response.put("status_code", 113);
			this.response.put("message", "OOPS! invalid user access. Please login again");
			this.response.put("status", "error");
			this.user = null;
			return;
		}
		this.user = user;		

	}

	public Map<String, Object> getResponse() {
		return response;
	}

	public void setResponse(Map<String, Object> response) {
		this.response = response;
	}

	public boolean isAccess() {
		
		if(this.userToken == null || this.user == null) {
			return false;
		}
		
		String[] scops = user.getScops().split(",");
		
				
		boolean adminScop = Arrays.stream(scops).anyMatch(new Predicate<String>() {
			@Override
			public boolean test(String text) {
				return text.equalsIgnoreCase("admin");
			}
		});
		
		boolean editorScop = Arrays.stream(scops).anyMatch(new Predicate<String>() {
			@Override
			public boolean test(String text) {
				return text.equalsIgnoreCase("content-editor");
			}
		});
		
		boolean publisherScop = Arrays.stream(scops).anyMatch(new Predicate<String>() {
			@Override
			public boolean test(String text) {
				return text.equalsIgnoreCase("content-publisher");
			}
		});
		
		boolean managerScop = Arrays.stream(scops).anyMatch(new Predicate<String>() {
			@Override
			public boolean test(String text) {
				return text.equalsIgnoreCase("campaign-manager");
			}
		});
		
		boolean clientScop = Arrays.stream(scops).anyMatch(new Predicate<String>() {
			@Override
			public boolean test(String text) {
				return text.equalsIgnoreCase("client");
			}
		});
				
		if(admin && adminScop) {
			this.userHaveAdminAcceess = true;
			return true;
		}else if(editor && editorScop) {
			this.userHaveEditorAcceess = true;
			return true;
		}else if(publisher && publisherScop) {
			this.userHavePublisherAcceess = true;
			return true;
		}else if(manager && managerScop) {
			this.userHaveManagerAcceess = true;
			return true;
		}else if(client && clientScop) {
			this.userHaveClientAccess = true;
			return true;
		}else {
			this.response.put("authentication", "fail");
			this.response.put("status_code", 114);
			this.response.put("message", "OOPS! You don't have permission");
			this.response.put("status", "error");			
			return false;
		}
		
	}

	public void setAccess(boolean access) {
		this.access = access;
	}
	
	public boolean isEditor() {
		return editor;
	}

	public void setEditor(boolean editor) {
		this.editor = editor;
	}

	public boolean isPublisher() {
		return publisher;
	}

	public void setPublisher(boolean publisher) {
		this.publisher = publisher;
	}

	public boolean isManager() {
		return manager;
	}

	public void setManager(boolean manager) {
		this.manager = manager;
	}
	
	public boolean isClient() {
		return client;
	}

	public void setClient(boolean client) {
		this.client = client;
	}

	public UserToken getUserToken() {
		return userToken;
	}

	public void setUserToken(UserToken userToken) {
		this.userToken = userToken;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
