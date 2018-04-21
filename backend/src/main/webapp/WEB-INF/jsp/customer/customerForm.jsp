<div class="contentpanel" id="add-modify-div">
    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>CUSTOMER</h1>
        </div>
    </div>
    <div class="container clear_both padding_fix">
        <!--\\\\\\\ container  start \\\\\\-->
        <div class="row">
            <div class="col-lg-7 col-lg-offset-2">
                <form id="customer-form">
                    <section class="panel default blue_title h2">
                        <div class="panel-heading">Add Customer</div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" placeholder="FIRST NAME" id="first-name"
                                                       name="firstName" class="form-control">
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" placeholder="LAST NAME" id="last-name"
                                                       name="lastName" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Manager</label>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" placeholder="Manager NAME" id="manager"
                                                       name="manager"
                                                       class="form-control">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="row">

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>LandLine</label>
                                        <input type="text" placeholder="ENTER Landline" id="landline" name="landline"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Mobile</label>
                                        <input type="text" placeholder="ENTER MOBILE" id="mobileNo" name="mobileNo"
                                               class="form-control">
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" placeholder="ENTER EMAIL" id="email" name="emailId"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>WhatsApp</label>
                                        <input type="text" placeholder="ENTER WhatsApp Mobile number" id="whatsapp"
                                               name="whatsapp" class="form-control">
                                    </div>
                                </div>


                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>State</label>
                                        <select id="state" name="state" class="form-control">
                                            <option value="-1">Select State</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>City</label>
                                        <select id="city" name="city" class="form-control">
                                            <option value="-1">Select City</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Locality</label>
                                        <select id="area" name="area" class="form-control">
                                            <option value="-1">Select Locality</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Address</label>
                                    <textarea id="address" name="address" placeholder="Enter your address"
                                              class="form-control"></textarea>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Pincode</label>
                                        <input type="text" placeholder="ENTER Pincode" id="pincode" name="pincode"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Beats</label>
                                        <select id="beat" name="beat" class="form-control">
                                            <option value="-1">Select Beat</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Bottle Issued</label>
                                        <input type="number" placeholder="ENTER Bottle" id="noOfBottles"
                                               name="noOfBottles"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Rate</label>
                                        <input type="number" placeholder="ENTER Rate" id="rate"
                                               name="rate"
                                               class="form-control">
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Deposit</label>
                                        <input type="number" placeholder="ENTER Deposit" id="deposit"
                                               name="deposit"
                                               class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Jar Type</label>
                                        <select id="jartype" name="jartype" class="form-control">

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="pull-left">
                                <button class="btn btn-primary btn-icon glyphicons envelope" type="submit"
                                        id="add-customer"><i></i> SAVE
                                </button>
                                <button class="btn btn-primary btn-icon glyphicons envelope" id="modify-customer">
                                    <i></i>SAVE
                                </button>
                                <button type="reset" class="btn btn-primary btn-icon glyphicons envelope" id="cancel">
                                    <i></i> CANCEL
                                </button>
                            </div>
                        </div>

                    </section>
                </form>
            </div>
        </div>
    </div>