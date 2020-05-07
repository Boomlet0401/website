package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;

import boomlet.app.dao.ProposalDAO;
import boomlet.app.data.Proposal;

public class ProposalImpl implements ProposalDAO{
	
	private final String table_name = "proposal";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Proposal proposal) {
		final String sql = "INSERT INTO " + table_name
				+ " (proposal_date,brand_agency,brand_name,client_name,strategist,contact_number,email_id,influencer_category,influencer_type,plateform,deliverables,co_ordinates,campaign_budget,campaign_duration,client_detail,added_by,added_by_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update(new PreparedStatementCreator() {

			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setDate(1, proposal.getProposal_date());
				ps.setString(2, proposal.getBrand_agency());
				ps.setString(3, proposal.getBrand_name());
				ps.setString(4, proposal.getClient_name());
				ps.setString(5, proposal.getStrategist());
				ps.setString(6, proposal.getContact_number());
				ps.setString(7, proposal.getEmail_id());
				ps.setString(8, proposal.getInfluencer_category());
				ps.setString(9, proposal.getInfluencer_type());
				ps.setString(10, proposal.getPlateform());
				ps.setString(11, proposal.getDeliverables());
				ps.setString(12, proposal.getCo_ordinates());
				ps.setString(13, proposal.getCampaign_budget());
				ps.setString(14, proposal.getCampaign_duration());
				ps.setString(15, proposal.getClient_detail());		
				ps.setString(16, proposal.getAdded_by());
				ps.setLong(17, proposal.getAdded_by_id());
				return ps;
			}
		}, generatedKeyHolder);

		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Proposal user, long id) {		
	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM "+table_name+" WHERE id= " + id;		
		jdbcTemplate.update(sql);		
	}

	@Override
	public List<Proposal> list() {		
		String sql = "SELECT * FROM "+table_name+" WHERE 1";
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Proposal.class));
	}

	@Override
	public Proposal get(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE id= " + id;		
		Proposal proposal;		
		try {
			proposal = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Proposal.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return proposal;
	}

}
