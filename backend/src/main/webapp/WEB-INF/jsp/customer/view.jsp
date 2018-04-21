<jsp:include page="../header.jsp"></jsp:include>

<div class="contentpanel" id="customer-details-div">
    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>CUSTOMER</h1>

        </div>

    </div>

    <div class="container clear_both padding_fix" >
        <!--\\\\\\\ container  start \\\\\\-->

        <div id="main-content">
            <div class="page-content">

                <div class="row">
                    <div class="col-md-12">
                        <div class="block-web">
                            <div class="porlets-content">
                                <div class="table-responsive">
                                    <table class="display table table-bordered table-striped" id="customer-details">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Customer Id</th>
                                            <th>Name</th>
                                            <th>Locality</th>
                                            <th>Beat</th>
                                            <th>Mobile</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>

                                    </table>
                                </div>
                                <!--/table-responsive-->
                            </div>
                            <!--/porlets-content-->
                            <div>
                                <a href="#" class="btn btn-primary" id="show-add-customer">Add</a>
                                <a href="#" class="btn btn-primary" id="show-modify-customer">Modify</a>
                                <a href="#" class="btn btn-default" id="delete">Delete</a>
                            </div>

                        </div>
                        <!--/block-web-->
                    </div>
                    <!--/col-md-12-->

                </div>
                <!--/row-->


            </div>
            <!--/page-content end-->
        </div>
        <!--/main-content end-->

    </div>
    <!--\\\\\\\ container  end \\\\\\-->
</div>
<!--\\\\\\\ content panel end \\\\\\-->
<div style="display: none" id="add-modify-div">
    <!-- Customer Add/Modify Forms-->
    <jsp:include page="customerForm.jsp"></jsp:include>
</div>
<jsp:include page="../footer.jsp"></jsp:include>


<script src="/js/application/customer.js"></script>
