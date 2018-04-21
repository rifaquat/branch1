<jsp:include page="../header.jsp"></jsp:include>

<div class="contentpanel" id="vehicle-details-div">
    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>Vehicle</h1>
        </div>
    </div>

    <div class="container clear_both padding_fix">
        <!--\\\\\\\ container  start \\\\\\-->

        <div id="main-content">
            <div class="page-content">

                <div class="row">
                    <div class="col-md-12">
                        <div class="block-web">
                            <div class="porlets-content">
                                <div class="table-responsive">
                                    <table class="display table table-bordered table-striped" id="vehicle-details">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Vehicle</th>
                                            <th>Contact Number(P)</th>
                                            <th>Contact Number(S)</th>
                                            <th>Email Id</th>
                                            <th>Address</th>
                                            <%--<th>Actions</th>--%>
                                        </tr>
                                        </thead>

                                    </table>
                                </div>
                                <!--/table-responsive-->
                            </div>
                            <!--/porlets-content-->
                            <div>
                                <a href="#" class="btn btn-primary" id="show-add-vehicle">Add</a>
                                <a href="#" class="btn btn-primary" id="show-modify-vehicle">Modify</a>
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

<div style="display: none" id="add-modify-div">

    <!-- Customer Add/Modify Forms-->
    <jsp:include page="forms.jsp"></jsp:include>

</div>

<jsp:include page="../footer.jsp"></jsp:include>
<script src="/js/application/vehicle.js"></script>
