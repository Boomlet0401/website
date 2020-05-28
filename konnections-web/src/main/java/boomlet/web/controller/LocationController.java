package boomlet.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import boomlet.app.dao.CitiesDAO;
import boomlet.app.dao.CountriesDAO;
import boomlet.app.dao.StatesDAO;
import boomlet.app.data.Cities;
import boomlet.app.data.Countries;
import boomlet.app.data.States;


@RestController
@RequestMapping(value = "/location", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class LocationController {
	
	@Autowired
	CountriesDAO countriesDAO;
	
	@Autowired
	StatesDAO statesDAO;
	
	@Autowired
	CitiesDAO citiesDAO;
	
	@PostMapping("/countries")
	public Map<String, Object> countries(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", "success");
		map.put("message", "list of countries");		
		List<Countries> countriesList = countriesDAO.list();
		map.put("list", countriesList);
		return map;
	}
	
	@PostMapping("/states")
	public Map<String, Object> states(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {
		Map<String, Object> map = new HashMap<String, Object>();		
		
		int countryId = (int) requestParams.get("id");
		
		map.put("status", "success");
		map.put("message", "list of states");		
		List<States> stateList = statesDAO.list(countryId);
		map.put("list", stateList);
		return map;
	}
	
	@PostMapping("/cities")
	public Map<String, Object> cities(@RequestBody Map<String, Object> requestParams,
			@RequestHeader Map<String, Object> requestHeader) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		int stateId = (int) requestParams.get("id");
		
		map.put("status", "success");
		map.put("message", "list of cities");		
		List<Cities> citiList = citiesDAO.list(stateId);
		map.put("list", citiList);
		return map;
	}
	
	
}
