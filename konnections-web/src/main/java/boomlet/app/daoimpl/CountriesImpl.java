package boomlet.app.daoimpl;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import boomlet.app.dao.CountriesDAO;
import boomlet.app.data.Countries;


public class CountriesImpl implements CountriesDAO{
	
	private final String table_name = "countries";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Countries get(long id) {
		String sql = "SELECT * FROM " + table_name + " WHERE id= '" + id + "'";
		Countries countries;
		try {
			countries = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Countries.class));
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
		return countries;
	}

	@Override
	public List<Countries> list() {
		String sql = "SELECT * FROM " + table_name;
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Countries.class));		
	}

}
