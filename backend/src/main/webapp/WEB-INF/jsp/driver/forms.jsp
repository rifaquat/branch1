<div class="contentpanel">

    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>Salesman</h1>
        </div>
    </div>
    <div class="container clear_both padding_fix">
        <!--\\\\\\\ container  start \\\\\\-->


        <div class="row">

            <div class="col-lg-7 col-lg-offset-2">
                <form id="driver-form">
                    <section class="panel default blue_title h2">
                        <div class="panel-heading">Salesman Details</div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="ENTER NAME" name="driverDetails.name" id="name"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>License</label>
                                        <input type="text" placeholder="LISENCE NUMBER" id="licence"
                                               name="driverDetails.license" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>User Name</label>
                                        <input type="text" placeholder="ENTER USER NAME" name="username" id="username"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>License Image</label>
                                        <input type="file" id="licence-image" name="licenceId">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Mobile</label>
                                        <input type="text" placeholder="ENTER MOBILE" name="driverDetails.mobileNumber"
                                               id="mobileNumber" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" placeholder="ENTER EMAIL" name="driverDetails.email"
                                               id="email" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="inner_form">
                                <label>Address</label>
                                <textarea placeholder="YOUR ADDRESS" rows="5" class="form-control" id="address"
                                          name="driverDetails.address"></textarea>
                            </div>
                            <div class="pull-left">
                                <button id="add-driver" type="submit" class="btn btn-primary btn-icon glyphicons envelope"><i></i> SAVE</button>
                                <button id="modify-driver" type="submit" class="btn btn-primary btn-icon glyphicons envelope"><i></i> SAVE</button>
                                <button id="cancel" type="reset" class="btn btn-primary btn-icon glyphicons envelope"> <i></i> CANCEL</button>
                            </div>
                        </div>

                    </section>

                    <input type="hidden" name="role.roleId" value="2">
                    <input type="hidden" name="id"  id="userId" value="">
                </form>
            </div>
        </div>

    </div>
    <!--\\\\\\\ container  end \\\\\\-->
</div>
<!--\\\\\\\ content panel end \\\\\\-->