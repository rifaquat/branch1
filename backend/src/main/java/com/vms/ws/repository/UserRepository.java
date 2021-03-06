package com.vms.ws.repository;

import java.util.List;

import com.vms.ws.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {


    @Query(value = "SELECT u FROM User u WHERE  u.username= :username and u.password=:password ")
    User validateUser(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT u FROM User u WHERE  u.username= :username and u.password=:password and u.role.id = :roleId")
    User validateUser(@Param("username") String username, @Param("password") String password, @Param("roleId") Long roleId);

    /*@Query(value = "SELECT u FROM User u WHERE  u.driverDetails.id = :driverId and u.password=:password ")
    User validate(@Param("driverId") Long username, @Param("password") String password);*/

    User save(User user);

    @Query(value = "SELECT u FROM User u WHERE  (u.vehicleNumber like %:search%  or u.primaryContactNumber like %:search% " +
            "or u.secondaryContactNumber like %:search% or u.emailId like %:search% or u.firstName like %:search% " +
            "or u.lastName like %:search% ) and u.deleted=false and u.role.id in (:roles) ")
    Page<User> findAll(Pageable pageable,@Param("search") String search , @Param("roles") List<Long> roles);

    @Query(value = "SELECT u FROM User u WHERE  u.role.id in (:roles) and u.deleted=false")
    Page<User> findAll(Pageable pageable,@Param("roles") List<Long> roles);

    @Query(nativeQuery = true,value =  "select count(*) from user u where username = :username and u.deleted=false")
    Long countByUsername(@Param("username") String userName);

    User findOne(Long id);

    @Query(value = "select usr from User usr where usr.deleted=false and usr.role.id=:roleId" )
    Page<User> findAll(Pageable pageable, @Param("roleId") Long role);

    @Query(value = "select usr from User usr where usr.deleted=false" )
    List<User> findAll();

    @Query(value = "select usr from User usr where usr.deleted=false and usr.role.id=:roleId")
    List<User> findAll(@Param("roleId") Long role);

}