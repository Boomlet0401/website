package boomlet.web.controller;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import boomlet.app.daoimpl.UserImpl;
import boomlet.app.daoimpl.UserTokenImpl;
import boomlet.app.data.User;
import boomlet.app.data.UserToken;

@RestController
@RequestMapping(value = "/oauth")
@CrossOrigin(origins = "*")
public class OauthController {

	@Autowired
	UserImpl userdao;
	
	@Autowired
	UserTokenImpl userTokendao;

	@PostMapping("/signup")
	public Map<String, Object> display(@RequestBody Map<String, Object> requestParams) {

		User user = new User();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");
		
		Map<String, String> error = new HashMap<String, String>();

		String name = (String) requestParams.get("name");
		String email = (String) requestParams.get("email");
		String pass = (String) requestParams.get("pass");
		String mobile = (String) requestParams.get("mobile");

		if (name == null || name.equalsIgnoreCase("")) {
			error.put("name", "Please enter name");
			map.put("ferror", error);
			return map;
		} else {
			user.setName(name);
		}

		if (email == null || email.equalsIgnoreCase("")) {
			error.put("email", "Please enter email address");
			map.put("ferror", error);
			return map;
		} else {
			user.setEmail(email);
		}

		if (pass == null || pass.equalsIgnoreCase("")) {
			error.put("pass", "Please enter password");
			map.put("ferror", error);
			return map;
		} else {
			user.setPass(pass);
		}

		if (mobile == null || mobile.equalsIgnoreCase("")) {
			error.put("mobile", "Please enter mobile number");
			map.put("ferror", error);
			return map;
		} else {
			user.setMobile(mobile);
		}

		User oldUser = new User();

		// Check Email
		oldUser = userdao.get(user.getEmail());
		if (oldUser != null) {
			error.put("email", "email already registered");
			map.put("ferror", error);
			return map;
		}

		// Check Mobile
		oldUser = userdao.getByMobile(user.getMobile());
		if (oldUser != null) {
			error.put("mobile", "mobile number already registered");
			map.put("ferror", error);
			return map;
		}
		
		map.put("ferror", error);
		user.setScops("client");

		long id = userdao.save(user);
		if(id > 0) {			
			map.put("status", "success");
			map.put("message", "Account created successfully. Please wait for activation");
			return map;
		}else {
			map.put("status", "error");
			map.put("message", "OOPS! Something wrong");
			return map;
		}
		

	}

	@PostMapping("/login")
	public  Map<String, Object> second(@RequestBody Map<String, Object> requestParams) {
		
		User user = new User();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "error");
		map.put("message", "");
		Map<String, String> error = new HashMap<String, String>();		
		String email = (String) requestParams.get("email");
		String pass = (String) requestParams.get("pass");	
		
		if (email == null || email.equalsIgnoreCase("")) {
			error.put("email", "Please enter email address");
			map.put("ferror", error);
			return map;
		} else {
			user.setEmail(email);
		}
		if (pass == null || pass.equalsIgnoreCase("")) {
			error.put("pass", "Please enter password");
			map.put("ferror", error);
			return map;
		} else {
			user.setPass(pass);
		}		
		map.put("ferror", error);
		User loginUser = userdao.checkLogin(email, pass);
		if(loginUser == null) {
			map.put("message","Login/password Incorrect");
			return map;
		}		
		if(loginUser.getScops() == null) {
			map.put("message", "Login/password Incorrect");
			return map;
		}		
		if(!loginUser.isActive()) {
			String activeNote = loginUser.getActive_note() == null ? "Account not active" :loginUser.getActive_note();
			map.put("message", activeNote);
			return map;
		}		
		BigInteger insertedKey = userTokendao.generateToken(loginUser);		
		if(insertedKey.longValue() > 0) {
			
			UserToken userToken = userTokendao.getToken(insertedKey.longValue());
			if(userToken == null) {
				map.put("user",loginUser);
				map.put("status", "error");
				map.put("message", "Token not found");
				return map;					
			}else {
				map.put("user",loginUser);
				map.put("status", "success");
				map.put("token", userToken);
				map.put("message", "Login success");
				return map;
			}
			
					
		}else {			
			map.put("user",loginUser);
			map.put("status", "error");
			map.put("message", "Token not genereated");
			return map;
		}
		
				
		
	}

}
