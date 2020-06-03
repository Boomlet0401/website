package boomlet.app.daoimpl;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import boomlet.app.dao.CitiesDAO;
import boomlet.app.data.Cities;

public class CitiesImpl implements CitiesDAO{
	
	private final String table_name = "cities";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Cities get(long id) {
		String sql = "SELECT * FROM " + table_name + " WHERE id= '" + id + "'";
		Cities cities;
		try {
			cities = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Cities.class));
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
		return cities;
	}

	@Override
	public List<Cities> list(int stateId) {
		String sql = "SELECT * FROM " + table_name+" WHERE state_id="+stateId;
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Cities.class));
	}

}
